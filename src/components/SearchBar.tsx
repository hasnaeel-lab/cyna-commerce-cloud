
import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { productService } from '@/services/productService';
import { Link } from 'react-router-dom';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({ onSearch, placeholder = "Rechercher des produits...", className = "" }: SearchBarProps) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Recherche en temps réel avec gestion alphabétique
  useEffect(() => {
    const searchProducts = async () => {
      if (!query.trim()) {
        setSuggestions([]);
        setIsOpen(false);
        return;
      }

      setIsLoading(true);
      try {
        const results = await productService.searchProducts(query);
        setSuggestions(results.slice(0, 8)); // Limiter à 8 suggestions
        setIsOpen(results.length > 0);
      } catch (error) {
        console.error('Erreur de recherche:', error);
        setSuggestions([]);
        setIsOpen(false);
      } finally {
        setIsLoading(false);
      }
    };

    // Délai pour éviter trop de requêtes
    const timeoutId = setTimeout(searchProducts, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  // Fermer les suggestions quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setIsOpen(false);
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
    setIsOpen(false);
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10"
          onFocus={() => query && suggestions.length > 0 && setIsOpen(true)}
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Suggestions dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">
              Recherche en cours...
            </div>
          ) : suggestions.length > 0 ? (
            <div className="py-2">
              {suggestions.map((product) => (
                <Link
                  key={product.id}
                  to={`/produit/${product.id}`}
                  className="flex items-center p-3 hover:bg-gray-50 transition-colors"
                  onClick={() => handleSearch(product.name)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-8 h-8 rounded object-cover mr-3"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{product.name}</div>
                    <div className="text-xs text-gray-500">{product.category}</div>
                  </div>
                  <div className="text-sm font-medium text-blue-600">
                    {product.price}€
                  </div>
                </Link>
              ))}
              
              {suggestions.length === 8 && (
                <div className="border-t">
                  <button
                    onClick={() => handleSearch(query)}
                    className="w-full p-3 text-sm text-blue-600 hover:bg-gray-50 transition-colors"
                  >
                    Voir tous les résultats pour "{query}"
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500">
              Aucun produit trouvé pour "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
