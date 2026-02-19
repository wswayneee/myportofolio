export default function Footer() {
  return (
    <footer className="bg-primary py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} [Your Full Name]. All rights reserved.
        </p>
        <p className="text-sm text-primary-foreground/50">
          Built with precision & purpose.
        </p>
      </div>
    </footer>
  );
}
