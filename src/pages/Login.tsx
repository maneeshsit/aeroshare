import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleLogin = () => {
    // Google login logic will go here
    console.log('Google login clicked');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic will go here
    console.log('Login submitted', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md">
        {/* Aeroshare Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent tracking-tight">
              Aeroshare
            </span>
          </div>
        </div>

        {/* Login Form Card */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
          {/* Google Login Button */}
          <Button
            type="button"
            variant="outline"
            className="w-full mb-6 h-12 text-base font-normal"
            onClick={handleGoogleLogin}
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Log in with Google
          </Button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-card text-muted-foreground">OR</span>
            </div>
          </div>

          {/* Email and Password Form */}
          <form onSubmit={handleLogin}>
            <div className="space-y-4 mb-6">
              {/* Email Field */}
              <div>
                <Label htmlFor="email" className="text-foreground font-semibold mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-base"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="password" className="text-foreground font-semibold">
                    Password
                  </Label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-brand-primary hover:text-brand-primary/80 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 text-base"
                  required
                />
              </div>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full h-12 text-base font-semibold bg-foreground text-background hover:bg-foreground/90 mb-6"
            >
              Log In
            </Button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link
              to="/signup"
              className="text-brand-primary hover:text-brand-primary/80 font-semibold transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
