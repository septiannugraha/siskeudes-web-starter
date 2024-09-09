// app/penganggaran/layout.tsx

import AppShell from '../components/AppShell';

export default function PenganggaranLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AppShell>{children}</AppShell>;
}
