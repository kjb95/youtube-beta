package com.kjb95.backend.service;

import com.kjb95.backend.entity.Video;
import com.kjb95.backend.repository.VideoRepository;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class VideoService {
    private final VideoRepository videoRepository;

    public void addPlaylist(Map<String,Object> playlist) {
        String publishedAtStr = (String)playlist.get("publishedAt");
        publishedAtStr = publishedAtStr.substring(0, publishedAtStr.length()-1);
        LocalDateTime publishedAt = LocalDateTime.parse(publishedAtStr);

        String subscriberCountStr = (String)playlist.get("subscriberCount");
        Long subscriberCount = null;
        if (subscriberCountStr != null)
            subscriberCount = Long.parseLong(subscriberCountStr);

        Video video = Video.builder()
            .id((String)playlist.get("id"))
            .channelId((String)playlist.get("channelId"))
            .channelTitle((String)playlist.get("channelTitle"))
            .description((String)playlist.get("description"))
            .title((String)playlist.get("title"))
            .publishedAt(publishedAt)
            .viewCount(Long.parseLong((String)playlist.get("viewCount")))
            .subscriberCount(subscriberCount)
            .isExist(true)
            .build();

        videoRepository.save(video);
    }
    
    public List<Video> getPlaylist() {
        return videoRepository.findAll();
    }
}
