import { useRef } from "react";
import "./RemoveImg.scss";

const RemoveImg = ({ product }) => {
  const trackRef = useRef(null);
  const state = useRef({
    isDown: false,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  });

  const detailCuts = product?.detailCuts || [];

  if (detailCuts.length === 0) return null;

  const onPointerDown = (e) => {
    const el = trackRef.current;
    if (!el) return;
    state.current.isDown = true;
    state.current.moved = false;
    state.current.startX = e.clientX;
    state.current.startScrollLeft = el.scrollLeft;
    el.setPointerCapture?.(e.pointerId);
    el.classList.add("is-dragging");
  };

  const onPointerMove = (e) => {
    const el = trackRef.current;
    if (!el || !state.current.isDown) return;
    const dx = e.clientX - state.current.startX;
    if (Math.abs(dx) > 4) state.current.moved = true;
    el.scrollLeft = state.current.startScrollLeft - dx;
  };

  const endDrag = () => {
    state.current.isDown = false;
    trackRef.current?.classList.remove("is-dragging");
  };

  const onClickCapture = (e) => {
    if (state.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section className="detail_cut">
      <div className="detail_cut_head">
        <h3 className="detail_cut_title">Detail Cut</h3>
      </div>

      <div className="detail_cut_viewport">
        <div
          className="detail_cut_track"
          ref={trackRef}
          role="list"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          onClickCapture={onClickCapture}
        >
          {detailCuts.map((it) => (
            <article className="detail_card" key={it.id} role="listitem">
              <div className="detail_card_media">
                <img className="img_base" src={`${process.env.PUBLIC_URL}${it.base}`} alt={it.alt || ""} />
                {it.hover && (
                  <img
                    className="img_hover"
                    src={`${process.env.PUBLIC_URL}${it.hover}`}
                    alt=""
                    aria-hidden="true"
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RemoveImg;
