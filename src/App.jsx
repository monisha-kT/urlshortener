import { useState } from "react";

function UrlShortener() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleShorten = async () => {
    if (!url) {
      setError("Please enter a valid URL");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await fetch(`https://tinyurl.com/api-create.php?url=${url}`);
      const data = await response.text();
      setShortUrl(data);
    } catch (err) {
      setError("Failed to shorten URL. Try again!");
    }
    setLoading(false);
  };

  return (
    <div className="url-shortener">
      <h2>URL Shortener</h2>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleShorten} disabled={loading}>
        {loading ? "Shortening..." : "Shorten URL"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {shortUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
          <button onClick={() => navigator.clipboard.writeText(shortUrl)}>
            Copy
          </button>
        </div>
      )}
    </div>
  );
}

export default UrlShortener;
