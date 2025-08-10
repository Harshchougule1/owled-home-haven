import React, { useEffect, useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
const sb = supabase as any;
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface ProductForm {
  name: string;
  price: string;
  description: string;
  image_url: string;
}

interface ProductRow {
  id: string;
  name: string;
  price: number;
  description: string | null;
  image_url: string | null;
}

const Admin: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [checkingRole, setCheckingRole] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const [products, setProducts] = useState<ProductRow[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState<ProductForm>({ name: '', price: '', description: '', image_url: '' });

  useEffect(() => {
    // SEO basics for this page
    document.title = 'Admin: Manage Products | The Owled Store';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Admin dashboard to add or remove products at The Owled Store.');
    else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = 'Admin dashboard to add or remove products at The Owled Store.';
      document.head.appendChild(m);
    }

    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.href = window.location.href;
    else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = window.location.href;
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    let active = true;
    const checkRole = async () => {
      setCheckingRole(true);
      const { data } = await sb
        .from('profiles')
        .select('role')
        .eq('user_id', user.id)
        .maybeSingle();
      if (!active) return;
      const admin = (data?.role || '').toLowerCase() === 'admin';
      setIsAdmin(admin);
      setCheckingRole(false);
      if (!admin) navigate('/');
    };
    checkRole();

    return () => { active = false; };
  }, [user, navigate]);

  const fetchProducts = async () => {
    setLoadingProducts(true);
    const { data, error } = await sb
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      toast({ title: 'Error', description: 'Failed to load products.', variant: 'destructive' });
    } else {
      setProducts(((data as any) || []) as ProductRow[]);
    }
    setLoadingProducts(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdmin) return;

    const priceNum = Number(form.price);
    if (!form.name.trim() || isNaN(priceNum) || priceNum <= 0) {
      toast({ title: 'Invalid input', description: 'Please provide a name and a valid price.' , variant: 'destructive'});
      return;
    }

    setSaving(true);
    const { error } = await sb.from('products').insert([
      {
        name: form.name.trim(),
        price: priceNum,
        description: form.description?.trim() || null,
        image_url: form.image_url?.trim() || null,
      },
    ]);

    if (error) {
      toast({ title: 'Error', description: error.message || 'Failed to create product.', variant: 'destructive' });
    } else {
      toast({ title: 'Product created', description: 'New product has been added.' });
      setForm({ name: '', price: '', description: '', image_url: '' });
      fetchProducts();
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!isAdmin) return;
    const confirm = window.confirm('Delete this product?');
    if (!confirm) return;

    const { error } = await sb.from('products').delete().eq('id', id);
    if (error) {
      toast({ title: 'Error', description: error.message || 'Failed to delete product.', variant: 'destructive' });
    } else {
      toast({ title: 'Deleted', description: 'Product removed.' });
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  if (checkingRole) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Admin: Manage Products</h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Add New Product</CardTitle>
              <CardDescription>Insert products into the catalog</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" type="number" step="0.01" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} required />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Optional" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="image_url">Image URL</Label>
                  <Input id="image_url" value={form.image_url} onChange={e => setForm(f => ({ ...f, image_url: e.target.value }))} placeholder="Optional" />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" disabled={saving}>{saving ? 'Saving...' : 'Add Product'}</Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>Remove products you no longer sell</CardDescription>
            </CardHeader>
            <CardContent>
              {loadingProducts ? (
                <p className="text-muted-foreground">Loading products...</p>
              ) : products.length === 0 ? (
                <p className="text-muted-foreground">No products yet.</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Image</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map(p => (
                      <TableRow key={p.id}>
                        <TableCell className="font-medium">{p.name}</TableCell>
                        <TableCell>₹{Number(p.price).toFixed(2)}</TableCell>
                        <TableCell className="max-w-[320px] truncate">{p.description || '-'}</TableCell>
                        <TableCell className="max-w-[220px] truncate">{p.image_url || '-'}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="destructive" size="sm" onClick={() => handleDelete(p.id)}>Delete</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
