import React from "react";
import '../css/Footer.css'

export default function Footer() {
  return (
    <footer>
      <p>
        Photo by
        <a
          class="footer-link"
          href="https://unsplash.com/@ameenfahmy_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Ameen Fahmy
        </a>
        on
        <a
          class="footer-link"
          href="https://unsplash.com/s/photos/hd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Unsplash
        </a>
      </p>
    </footer>
  );
}
