import "./myyoutube.css";
import PortfolioNavbar from "../PortfolioNavBar/portfolioNavbar";
import React, { useEffect, useState } from "react";

const MyYoutube = () => {
    const [videos, setVideos] = useState([]);
    const API_KEY = "AIzaSyD3IoaAjy-fWWi9mJIY9lMbS49jX_2w7tY"; // Replace with your YouTube Data API key
    const CHANNEL_ID = "UCenBaJ4qo33uSpHkKSArW3A"; // Corrected channel ID

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=9`
                );
                const data = await response.json();
                console.log("API Response:", data); // Log the response
                setVideos(data.items || []); // Handle cases where items might be undefined
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        fetchVideos();
    }, []);

    return (
    <div>
    <PortfolioNavbar />
    <div className="videos-section">
    <h1 className="videos-title">Bon Voyage Channel Videos</h1>
    <div className="videos-container">
        {videos.map((video) => (
            <div key={video.id.videoId} className="video-card">
                <a
                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-title"
                >
                    <img
                        src={video.snippet.thumbnails.medium.url}
                        alt={video.snippet.title}
                        className="video-thumbnail"
                    />
                    <h3>{video.snippet.title}</h3>
                </a>
                <p className="video-description">
                    {video.snippet.description.slice(0, 100)}...
                </p>
            </div>
        ))}
    </div>
</div>
</div>

    );
};

export default MyYoutube;
