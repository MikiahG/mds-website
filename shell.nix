{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_20
  ];

  shellHook = ''
    echo "🚀 Hobby Website Development Environment"
    echo "Available commands:"
    echo "  npm install    - Install dependencies"
    echo "  npm run serve  - Start development server (http://localhost:8080)"
    echo "  npm run build  - Build static site"
    echo "  npm run clean  - Clean build files"
    echo ""
    
    # Install dependencies if node_modules doesn't exist
    if [ ! -d "node_modules" ]; then
      echo "📦 Installing dependencies..."
      npm install
      echo "✅ Dependencies installed!"
      echo ""
    fi
    
    echo "💡 Run 'npm run serve' to start the development server"
  '';
}
