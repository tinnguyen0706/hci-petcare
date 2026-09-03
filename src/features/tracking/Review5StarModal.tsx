import React, { useState } from 'react';
import { Booking, Pet } from '../../types';
import { StarIcon, CheckIcon } from '../../components/icons/Icons';

interface Review5StarModalProps {
  booking: Booking;
  pet: Pet;
  onSubmitReview: (rating: number, comment: string, savePreference: boolean) => void;
  onClose: () => void;
}

export const Review5StarModal: React.FC<Review5StarModalProps> = ({
  booking,
  pet,
  onSubmitReview,
  onClose
}) => {
  const [rating, setRating] = useState<number>(5);
  const [selectedTags, setSelectedTags] = useState<string[]>([
    'Kỹ thuật viên nhẹ nhàng',
    'Đúng quy trình da liễu'
  ]);
  const [comment, setComment] = useState<string>('KTV Mai tắm cho bé Bơ rất cẩn thận, da bé không hề bị ửng đỏ!');
  const [savePreference, setSavePreference] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const tags = [
    'Kỹ thuật viên nhẹ nhàng',
    'Đúng quy trình da liễu',
    'Bé rất vui vẻ',
    'Tiệm sạch sẽ thơm tho'
  ];

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = () => {
    onSubmitReview(rating, comment, savePreference);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 900);
  };

  return (
    <div style={{ paddingTop: '8px', textAlign: 'center' }}>
      <h2 className="text-h2" style={{ marginBottom: '4px' }}>Đánh Giá Ca Chăm Sóc</h2>
      <p className="text-sub" style={{ fontSize: '12px', marginBottom: '14px' }}>
        Kỹ thuật viên phụ trách: <strong>{booking.technicianName}</strong> • Bé {pet.name}
      </p>

      {/* Star Rating Selector */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '14px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              color: star <= rating ? '#D97706' : '#CBD5E1'
            }}
            aria-label={`${star} sao`}
          >
            <StarIcon size={32} filled={star <= rating} color={star <= rating ? '#D97706' : '#CBD5E1'} />
          </button>
        ))}
      </div>

      {/* Chips Khen Nhanh */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center', marginBottom: '14px' }}>
        {tags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`badge ${isSelected ? 'badge-teal' : 'badge-neutral'}`}
              style={{
                padding: '6px 12px',
                borderRadius: '16px',
                fontSize: '11px',
                cursor: 'pointer'
              }}
              aria-pressed={isSelected}
            >
              {isSelected ? '✓ ' : '+ '}{tag}
            </button>
          );
        })}
      </div>

      {/* Nhận xét text */}
      <div style={{ marginBottom: '14px', textAlign: 'left' }}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #CBD5E1',
            outline: 'none',
            fontSize: '13px',
            fontFamily: 'inherit'
          }}
          placeholder="Chia sẻ cảm nhận của bạn về buổi spa hôm nay..."
        />
      </div>

      {/* Checkbox lưu công thức & KTV ưu tiên */}
      <div className="card" style={{ backgroundColor: '#F0FDFA', border: '1px solid #CCFBF1', textAlign: 'left', marginBottom: '16px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 600, color: '#0D766E' }}>
          <input
            type="checkbox"
            checked={savePreference}
            onChange={(e) => setSavePreference(e.target.checked)}
            style={{ width: '18px', height: '18px', accentColor: '#0D766E' }}
          />
          Lưu công thức Derma-Care & Ưu tiên KTV {booking.technicianName} lần sau
        </label>
        <span style={{ fontSize: '11px', color: '#0F4C45', display: 'block', marginTop: '4px', paddingLeft: '26px' }}>
          Hệ thống sẽ tự động gợi ý KTV này khi bạn đặt lịch hoặc dùng tính năng Rebook 1-chạm.
        </span>
      </div>

      {submitted ? (
        <div className="badge badge-success" style={{ width: '100%', height: '48px', justifyContent: 'center', fontSize: '14px' }}>
          <CheckIcon size={18} />
          <span>Cảm ơn bạn đã đánh giá 5 sao! Đã lưu vào lịch sử.</span>
        </div>
      ) : (
        <button className="btn-primary" onClick={handleSubmit}>
          <CheckIcon size={18} />
          <span>Gửi đánh giá & Hoàn tất buổi spa</span>
        </button>
      )}
    </div>
  );
};
