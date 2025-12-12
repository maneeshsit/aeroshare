import { useState, useEffect } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { User } from '@supabase/supabase-js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logged out",
        description: "You have been successfully logged out"
      });
      navigate('/login');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message
      });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto pr-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 pl-4 md:pl-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent tracking-tight">
                Aeroshare
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-muted-foreground hover:text-brand-primary transition-colors">Home</a>
            <a href="#fleet" className="text-muted-foreground hover:text-brand-primary transition-colors">HX50</a>
            <a href="#services" className="text-muted-foreground hover:text-brand-primary transition-colors">Services</a>
            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-muted-foreground hover:text-brand-primary transition-colors"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            ) : (
              <a href="/login" className="text-muted-foreground hover:text-brand-primary transition-colors">
                Login
              </a>
            )}
            <a href="#contact" className="bg-brand-primary text-white px-6 py-2 rounded-lg hover:bg-brand-primary/90 transition-colors">
              Book Your Flight
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-muted-foreground hover:text-brand-primary transition-colors">Home</a>
              <a href="#fleet" className="text-muted-foreground hover:text-brand-primary transition-colors">HX50</a>
              <a href="#services" className="text-muted-foreground hover:text-brand-primary transition-colors">Services</a>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-brand-primary transition-colors w-fit"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              ) : (
                <a href="/login" className="text-muted-foreground hover:text-brand-primary transition-colors">
                  Login
                </a>
              )}
              <a href="#contact" className="bg-brand-primary text-white px-6 py-2 rounded-lg hover:bg-brand-primary/90 transition-colors w-fit">
                Book Your Flight
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
