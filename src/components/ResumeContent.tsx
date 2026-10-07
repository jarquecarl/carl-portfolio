export function ResumeContent() {
  return (
    <div className="resume-viewer">
      <div className="resume-toolbar">
        <span className="resume-toolbar-label">📄 Carl_Christian_Jarque_CV.pdf</span>
        <a
          href="/Carl_Christian_Jarque_CV.pdf"
          download="Carl_Christian_Jarque_CV.pdf"
          className="resume-download-btn"
        >
          ⬇ Download
        </a>
      </div>
      <div className="resume-embed-wrap">
        <iframe
          src="/Carl_Christian_Jarque_CV.pdf"
          title="Resume"
          className="resume-iframe"
        />
      </div>
    </div>
  );
}