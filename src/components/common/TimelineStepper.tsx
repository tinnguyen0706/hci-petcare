import React from 'react';
import { MilestoneStep } from '../../types';
import { CheckIcon } from '../icons/Icons';

interface TimelineStepperProps {
  currentStep: MilestoneStep;
  onStepClick?: (step: MilestoneStep) => void;
  interactive?: boolean;
}

const steps: { step: MilestoneStep; label: string; subLabel: string }[] = [
  { step: 1, label: 'Đã nhận', subLabel: 'Tiếp nhận quầy' },
  { step: 2, label: 'Đang chăm sóc', subLabel: 'Bồn dược liệu' },
  { step: 3, label: 'Hoàn tất', subLabel: 'Sấy chuốt lông' },
  { step: 4, label: 'Chờ đón', subLabel: 'Sẵn sàng đón' }
];

export const TimelineStepper: React.FC<TimelineStepperProps> = ({
  currentStep,
  onStepClick,
  interactive = true
}) => {
  // Tính tỷ lệ tiến độ track theo currentStep (1 -> 0%, 2 -> 33.3%, 3 -> 66.6%, 4 -> 100%)
  const progressPercent = ((currentStep - 1) / 3) * 100;

  return (
    <div className="timeline-stepper" aria-label="Tiến độ chăm sóc 4 mốc thời gian thực">
      {/* Background Track */}
      <div className="timeline-track" />
      
      {/* Active Progress Bar */}
      <div 
        className="timeline-progress" 
        style={{ width: `calc(${progressPercent}% * 0.85)` }} 
      />

      {steps.map((s) => {
        const isCompleted = currentStep > s.step;
        const isActive = currentStep === s.step;

        return (
          <div
            key={s.step}
            className={`timeline-step-node step-node ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
            onClick={() => interactive && onStepClick && onStepClick(s.step)}
            role={interactive ? 'button' : 'presentation'}
            tabIndex={interactive ? 0 : -1}
            aria-label={`Mốc ${s.step}: ${s.label} (${isCompleted ? 'Đã xong' : isActive ? 'Đang thực hiện' : 'Chưa đến'})`}
            aria-pressed={isActive}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          >
            <div className="step-circle">
              {isCompleted ? <CheckIcon size={16} color="#FFFFFF" /> : s.step}
            </div>
            <span className="step-label">{s.label}</span>
          </div>
        );
      })}
    </div>
  );
};
