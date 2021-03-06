import { useState } from "react";
import Modal from "../modal/modal";
import "./anime-card.scss";

import playIcon from "../../../assets/icons/right.svg";
import animeType from "../../../types/enums/anime-type";

export default function AnimeCard({ type }: { type: animeType }) {
  const [showModal, setShowModal] = useState(false);

  function bottomButton() {
    switch (type) {
      case animeType.watching:
        return (
          <div
            className="play-button"
            onClick={(event) => {
              event.stopPropagation();
              //todo : add auto track of episodes
              window.open("https://www.netflix.com/watch/81511413");
            }}
          >
            <span>Ep 1</span>
            <img className="play-icon" src={playIcon} alt="play" />
          </div>
        );
      case animeType.recommendation:
        return (
          <div
            className="play-button"
            onClick={(event) => {
              event.stopPropagation();
              //todo : add auto track of episodes
              window.open("https://www.netflix.com/watch/81511413");
            }}
          >
            <span>Trailer</span>
            <img className="play-icon" src={playIcon} alt="play" />
          </div>
        );
      default:
        return <div>hehe</div>;
    }
  }

  return (
    <div className="anime-card" onClick={() => setShowModal(true)}>
      <Modal
        showModal={showModal}
        closeModal={() => setShowModal(() => false)}
        body={
          <ModalBody closeModal={() => setShowModal(() => false)} type={type} />
        }
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Ancient_Magus%27_Bride%2C_volume_1.jpg/220px-The_Ancient_Magus%27_Bride%2C_volume_1.jpg"
        alt="thumbnail"
        className="thumbnail"
        draggable={false}
      />
      <div className="anime-name">Mahoutsukai no yome</div>
      {bottomButton()}
    </div>
  );
}

function ModalBody({
  closeModal,
  type,
}: {
  closeModal: () => void;
  type: animeType;
}) {
  const isWatching = type === animeType.watching;

  return (
    <div className="anime-modal" onClick={(event) => event.stopPropagation()}>
      <div className="anime-details-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Ancient_Magus%27_Bride%2C_volume_1.jpg/220px-The_Ancient_Magus%27_Bride%2C_volume_1.jpg"
          alt=""
          className="thumbnail"
        />
        <div className="anime-details">
          <div className="title">
            <div className="name">Mahoutsukai no yome</div>
            <div className="ratings">********</div>
          </div>
          <div className="synopsis">
            Cupidatat voluptate cupidatat magna Lorem occaecat fugiat
            exercitation sit sit. Lorem incididunt minim ipsum proident
            incididunt. Dolor ipsum cillum esse non consequat ea Lorem culpa.
            Culpa elit voluptate veniam laborum veniam consequat nulla fugiat
            laboris. Culpa voluptate proident qui incididunt deserunt quis enim
            eiusmod duis quis.
          </div>
          {isWatching && (
            <>
              <div className="link-input">
                <div>Link:</div>
                <input
                  type="text"
                  className="input"
                  placeholder="https://www.netflix.com/watch/81511413"
                />
                <div className="update">Update</div>
              </div>
              <div className="hint">
                *add the link for the website that you want to stream the anime
                on and it will automatically redirect you it when you press the
                play button in the calendar.
              </div>
            </>
          )}
          <div className="actions">
            <div className="blue-button">Plan to watch</div>
            <div className="green-button">Mark Complete</div>
            <div className="yellow-button">Put on hold</div>
            <div className="red-button">Drop</div>
          </div>
        </div>
      </div>
    </div>
  );
}
