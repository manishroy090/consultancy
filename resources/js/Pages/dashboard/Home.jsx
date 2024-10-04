import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Analytics from '@/Components/Analytics';

export default function home() {
  return (
    <AuthenticatedLayout>
        <Analytics/>
      

  </AuthenticatedLayout>
  )
}
