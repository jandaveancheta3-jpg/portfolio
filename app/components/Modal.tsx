"use client";

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

export default function Modal({
  children,
  closeModal,
}: ModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          onClick={closeModal}
          style={{
            float: "right",
            background: "red",
            color: "white",
            border: "none",
            padding: "8px 14px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          Close
        </button>

        <div style={{ clear: "both" }}>
          {children}
        </div>
      </div>
    </div>
  );
}