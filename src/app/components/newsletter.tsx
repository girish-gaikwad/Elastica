"use client";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { CheckCircle2, Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
  };

  return (
    <div className="w-full mx-auto p-4 sm:p-6 md:p-8">
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <Card className="relative backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 border-0 shadow-xl">
          <div className="flex flex-col lg:flex-row gap-8 p-4 sm:p-6 md:p-8">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-6 lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-purple-500" />
                <span className="text-xs sm:text-sm text-purple-700 dark:text-purple-300">Stay Ahead of the Curve</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Join the Future of Innovation
              </h2>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Get exclusive insights, cutting-edge updates, and expert tips delivered to your inbox. Be part of a community that shapes tomorrow.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                  <span>Weekly Updates</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                  <span>Exclusive Content</span>
                </div>
              </div>
            </div>

            {/* Right Content - Form */}
            <div className="relative lg:w-1/2">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl sm:rounded-3xl blur-xl" />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email address
                    </label>
                    <div className="relative">
                      <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-10 sm:h-12 pr-10 sm:pr-12 text-sm sm:text-base"
                        placeholder="name@company.com"
                        required
                      />
                      <Send className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-10 sm:h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-sm sm:text-base"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span className="flex items-center gap-2">
                      Subscribe Now
                      <Send 
                        className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 ${
                          isHovered ? 'translate-x-1' : ''
                        }`}
                      />
                    </span>
                  </Button>

                  {status === 'success' && (
                    <div className="flex items-center gap-1.5 sm:gap-2 text-green-600 dark:text-green-400 text-xs sm:text-sm">
                      <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Welcome aboard! Check your email to confirm.</span>
                    </div>
                  )}

                  <p className="text-[10px] sm:text-xs text-center text-gray-500 dark:text-gray-400">
                    By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NewsletterSection;