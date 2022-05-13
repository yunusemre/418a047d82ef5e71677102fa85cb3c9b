import './Detail.scss';

const Detail = ({ body_html, title, closeModal }: any) => {
  return (
    <>
      <section className="detail-modal">
        <div className="detail-modal-overlay" onClick={closeModal}></div>
        <div className="detail-modal-dialog">
          <div className="detail-modal-header">
            <h3 className="detail-modal-dialog__title">{title}</h3>
            <span className="c-pointer" onClick={closeModal}>
              x
            </span>
          </div>
          <div
            className="detail-modal-content"
            dangerouslySetInnerHTML={{ __html: body_html }}></div>
        </div>
      </section>
    </>
  );
};

export default Detail;
