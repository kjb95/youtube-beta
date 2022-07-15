package com.kjb95.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Video {
    @Id
    private Long id;

    @Column
    private String channelId;
    @Column
    private String channelTitle;
    @Column
    private String description;
    @Column
    private String title;
    @Column
    private String publishedAt;
    @Column
    private String viewCount;
    @Column
    private String subscriberCount;
    @Column
    private boolean isExist;
}
