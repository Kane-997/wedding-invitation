'use client';

import { Gift, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const accounts = [
  {
    bank: 'Vietcombank',
    logo: '🏦',
    accountNumber: '1234567890',
    accountName: 'NGUYEN MINH ANH',
    branch: 'Chi nhánh TP.HCM',
    qr: 'https://img.vietqr.io/image/VCB-1234567890-compact2.png?amount=0&addInfo=Mung%20cuoi%20Minh%20Anh%20Quoc%20Huy&accountName=NGUYEN%20MINH%20ANH',
  },
  {
    bank: 'MB Bank',
    logo: '🏛️',
    accountNumber: '0987654321',
    accountName: 'TRAN QUOC HUY',
    branch: 'Chi nhánh TP.HCM',
    qr: 'https://img.vietqr.io/image/MB-0987654321-compact2.png?amount=0&addInfo=Mung%20cuoi%20Minh%20Anh%20Quoc%20Huy&accountName=TRAN%20QUOC%20HUY',
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1 rounded transition-colors"
      style={{ color: copied ? '#22c55e' : '#d4af37' }}
      title="Sao chép"
    >
      {copied ? <Check size={15} /> : <Copy size={15} />}
    </button>
  );
}

export default function QRTransfer() {
  return (
    <section
      id="gift"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #fdf6e9 0%, #fffef9 100%)' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-[0.4em] uppercase mb-4" style={{ color: '#b8962e' }}>
            Mừng cưới
          </p>
          <h2
            className="font-serif"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 300, color: '#5c3d1a' }}
          >
            Hộp quà yêu thương
          </h2>
          <div className="gold-divider mt-4 mb-6" />
          <p className="font-sans text-sm max-w-lg mx-auto" style={{ color: '#7a5c2e', lineHeight: 1.8 }}>
            Sự hiện diện của bạn là món quà quý giá nhất. Nếu bạn muốn tặng quà, chúng tôi xin chân thành cảm ơn.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {accounts.map((acc, i) => (
            <div
              key={i}
              className="rounded-sm overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid #e8d5a3',
                boxShadow: '0 8px 40px rgba(139,100,32,0.12)',
              }}
            >
              {/* Bank header */}
              <div
                className="px-4 md:px-6 py-3 md:py-4 flex items-center gap-3"
                style={{ borderBottom: '1px solid #e8d5a3', background: 'rgba(212,175,55,0.06)' }}
              >
                <span className="text-2xl">{acc.logo}</span>
                <div>
                  <p className="font-sans text-sm font-medium" style={{ color: '#5c3d1a' }}>
                    {acc.bank}
                  </p>
                  <p className="font-sans text-xs" style={{ color: '#b8962e' }}>
                    {acc.branch}
                  </p>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex justify-center py-4 px-4 md:py-6">
                <div
                  className="p-3 rounded-sm"
                  style={{ border: '1px solid #e8d5a3', background: 'white' }}
                >
                  <img
                    src={acc.qr}
                    alt={`QR ${acc.bank}`}
                    className="w-36 h-36 md:w-44 md:h-44 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(`${acc.bank}|${acc.accountNumber}|${acc.accountName}|Mung cuoi Minh Anh Quoc Huy`)}`;
                    }}
                  />
                </div>
              </div>

              {/* Account details */}
              <div className="px-4 md:px-6 pb-4 md:pb-6 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs uppercase tracking-widest" style={{ color: '#b8962e' }}>
                    Số tài khoản
                  </span>
                  <div className="flex items-center">
                    <span className="font-sans text-sm font-medium" style={{ color: '#5c3d1a' }}>
                      {acc.accountNumber}
                    </span>
                    <CopyButton text={acc.accountNumber} />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs uppercase tracking-widest" style={{ color: '#b8962e' }}>
                    Chủ tài khoản
                  </span>
                  <span className="font-sans text-sm font-medium" style={{ color: '#5c3d1a' }}>
                    {acc.accountName}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs uppercase tracking-widest" style={{ color: '#b8962e' }}>
                    Nội dung CK
                  </span>
                  <div className="flex items-center">
                    <span className="font-sans text-xs" style={{ color: '#7a5c2e' }}>
                      Mung cuoi MA QH
                    </span>
                    <CopyButton text="Mung cuoi Minh Anh Quoc Huy" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Gift size={20} className="inline-block mr-2" style={{ color: '#d4af37' }} />
          <span className="font-sans text-sm italic" style={{ color: '#9a7a3a' }}>
            Chúng tôi trân trọng mọi tình cảm của bạn dành cho chúng tôi
          </span>
        </div>
      </div>
    </section>
  );
}
