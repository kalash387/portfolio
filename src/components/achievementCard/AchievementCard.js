import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const additionalStyles = () => {
    if (cardInfo.title === 'JPMorgan Chase & Co.') {
      return { height: "200px", width: "400px" }
    }

    else if (cardInfo.title === 'Angular')
      return { height: "250px", width: "250px" };

    else return {}
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          style={additionalStyles()}
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        />
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => (
          <span
            key={i}
            className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
            onClick={() => openUrlInNewTab(v.url, v.name)}
          >
            {v.name}
          </span>
        ))}
      </div>
    </div>
  );

}
