'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Download } from 'lucide-react';

interface RSVPData {
  id: string;
  name: string;
  attending: boolean;
  guests: number;
  message: string;
  created_at: string;
}

export default function AdminPage() {
  const [rsvpData, setRsvpData] = useState<RSVPData[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, attending: 0, notAttending: 0, totalGuests: 0 });

  useEffect(() => {
    fetchRSVPData();
  }, []);

  const fetchRSVPData = async () => {
    try {
      const { data, error } = await supabase
        .from('rsvp')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (data) {
        const rsvp = data as RSVPData[];
        setRsvpData(rsvp);

        const attending = rsvp.filter((r) => r.attending).length;
        const notAttending = rsvp.filter((r) => !r.attending).length;
        const totalGuests = rsvp.reduce((sum, r) => sum + (r.guests || 0), 0);

        setStats({
          total: rsvp.length,
          attending,
          notAttending,
          totalGuests,
        });
      }
    } catch (err) {
      console.error('Error fetching RSVP data:', err);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const csv = [
      ['STT', 'Tên', 'Xác nhận', 'Số khách', 'Lời chúc', 'Ngày gửi'],
      ...rsvpData.map((r, i) => [
        i + 1,
        r.name,
        r.attending ? 'Tham dự' : 'Không tham dự',
        r.guests || 0,
        r.message || '',
        new Date(r.created_at).toLocaleDateString('vi-VN'),
      ]),
    ]
      .map((row) => row.map((cell) => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `RSVP_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#fdf6e9' }}>
        <p style={{ color: '#5c3d1a' }}>Đang tải dữ liệu...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: '#fdf6e9', paddingBottom: '40px' }}>
      {/* Header */}
      <div className="sticky top-0 z-40 py-4 px-4" style={{ background: 'rgba(255,254,249,0.95)', borderBottom: '1px solid #e8d5a3' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-serif text-2xl" style={{ color: '#5c3d1a' }}>
              Danh sách RSVP
            </h1>
            <p className="font-sans text-sm" style={{ color: '#7a5c2e' }}>
              Quản lý xác nhận từ khách mời
            </p>
          </div>
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 px-4 py-2 rounded-sm text-white font-sans text-sm"
            style={{ background: '#d4af37' }}
          >
            <Download size={16} />
            Xuất CSV
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {[
          { label: 'Tổng cộng', value: stats.total, color: '#d4af37' },
          { label: 'Tham dự', value: stats.attending, color: '#22c55e' },
          { label: 'Không tham dự', value: stats.notAttending, color: '#ef4444' },
          { label: 'Tổng khách', value: stats.totalGuests, color: '#3b82f6' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-sm p-4"
            style={{
              background: 'rgba(255,255,255,0.9)',
              border: `2px solid ${stat.color}`,
            }}
          >
            <p className="font-sans text-xs uppercase tracking-wider" style={{ color: '#b8962e' }}>
              {stat.label}
            </p>
            <p className="font-serif text-3xl" style={{ color: stat.color }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="overflow-x-auto rounded-sm" style={{ border: '1px solid #e8d5a3', background: 'rgba(255,255,255,0.9)' }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: '2px solid #e8d5a3', background: 'rgba(212,175,55,0.06)' }}>
                <th className="px-4 py-3 text-left font-sans text-xs uppercase tracking-wider" style={{ color: '#b8962e' }}>
                  STT
                </th>
                <th className="px-4 py-3 text-left font-sans text-xs uppercase tracking-wider" style={{ color: '#b8962e' }}>
                  Tên
                </th>
                <th className="px-4 py-3 text-left font-sans text-xs uppercase tracking-wider" style={{ color: '#b8962e' }}>
                  Xác nhận
                </th>
                <th className="px-4 py-3 text-center font-sans text-xs uppercase tracking-wider" style={{ color: '#b8962e' }}>
                  Số khách
                </th>
                <th className="px-4 py-3 text-left font-sans text-xs uppercase tracking-wider" style={{ color: '#b8962e' }}>
                  Lời chúc
                </th>
                <th className="px-4 py-3 text-left font-sans text-xs uppercase tracking-wider" style={{ color: '#b8962e' }}>
                  Ngày gửi
                </th>
              </tr>
            </thead>
            <tbody>
              {rsvpData.map((rsvp, idx) => (
                <tr key={rsvp.id} style={{ borderBottom: '1px solid #f0e0a0' }}>
                  <td className="px-4 py-3" style={{ color: '#5c3d1a' }}>
                    {idx + 1}
                  </td>
                  <td className="px-4 py-3" style={{ color: '#5c3d1a' }}>
                    <strong>{rsvp.name}</strong>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className="px-2 py-1 rounded-sm text-xs font-medium"
                      style={{
                        background: rsvp.attending ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
                        color: rsvp.attending ? '#22c55e' : '#ef4444',
                      }}
                    >
                      {rsvp.attending ? 'Tham dự' : 'Không tham dự'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center" style={{ color: '#5c3d1a' }}>
                    {rsvp.guests || '-'}
                  </td>
                  <td className="px-4 py-3 max-w-xs truncate" style={{ color: '#7a5c2e' }}>
                    {rsvp.message || <em>Không có</em>}
                  </td>
                  <td className="px-4 py-3 text-sm" style={{ color: '#9a7a3a' }}>
                    {new Date(rsvp.created_at).toLocaleDateString('vi-VN')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {rsvpData.length === 0 && (
        <div className="text-center py-12">
          <p style={{ color: '#b8962e' }}>Chưa có dữ liệu RSVP nào</p>
        </div>
      )}
    </div>
  );
}
