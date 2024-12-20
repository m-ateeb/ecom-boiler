import React from 'react';
import { supabase } from '../../lib/supabase';

export default function AdminOrders() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Orders</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-500">No orders found</p>
      </div>
    </div>
  );
}