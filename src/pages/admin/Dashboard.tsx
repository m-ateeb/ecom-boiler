import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ShoppingBag } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/admin/products"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center">
            <Package className="h-8 w-8 text-indigo-600" />
            <h2 className="ml-3 text-xl font-semibold text-gray-900">Products</h2>
          </div>
          <p className="mt-2 text-gray-500">Manage your product inventory</p>
        </Link>
        <Link
          to="/admin/orders"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-indigo-600" />
            <h2 className="ml-3 text-xl font-semibold text-gray-900">Orders</h2>
          </div>
          <p className="mt-2 text-gray-500">View and manage customer orders</p>
        </Link>
      </div>
    </div>
  );
}