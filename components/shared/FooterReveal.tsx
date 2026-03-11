"use client";

/**
 * FooterReveal wraps page content + footer so the footer sits
 * sticky behind the content and is revealed as you scroll past.
 */

export const FooterReveal = ({
      children,
      footer,
}: {
      children: React.ReactNode;
      footer: React.ReactNode;
}) => {
      return (
            <div className="relative">
                  {/* Footer — sits behind the content, sticky at the bottom */}
                  <div className="sticky bottom-0 z-0">
                        {footer}
                  </div>

                  {/* Main content — scrolls over the footer */}
                  <div className="relative z-10 bg-neutral-950">
                        {children}
                  </div>
            </div>
      );
};
