$(function () {
    window.addEventListener('message', function (event) {
        var v = event.data;

        if (v.app == 'music' && v.task == 'updatePlaylist') {
            music.playlist.data = v.playlistData
            music.album.data = v.albumData
            music.displayPlaylists("music-home-playlists", music.playlist.data);
            music.displayAlbums("music-home-albums", music.album.data);
        }

        // update open playlist
        else if (v.app == 'music' && v.task == 'updateOpenPlaylist') {
            music.playlist.open = v.playlistData
        }
        // update open album
        else if (v.app == 'music' && v.task == 'updateOpenAlbum') {
            music.album.open = v.albumData
        }

        else if (v.app == 'music' && v.task == 'updateLikedTracks') {
            music.likedTracks.data = v.trackData
            music.displayTracks("music-home-tracks", music.likedTracks.data);
        }

        // Liked Tracks

        // Sync
        if (v.app == 'music' && v.task == 'updateSession') {
            music.session.update(v.data)
        } else if (v.app == 'music' && v.task == 'join') {
            music.session.start(v.code);
        } else if (v.app == 'music' && v.task == 'updateCurrentTime') {
            music.session.updateCurrentTime(v.time)
        } else if (v.app == 'music' && v.task == 'togglePlayPause') {
            music.debug("togglePlayPause    ")
            music.session.player.togglePlayState(v.playing)
        } else if (v.app == 'music' && v.task == 'playNext') {
            music.playNext()
        } else if (v.app == 'music' && v.task == 'lastSong') {
            music.playLast()
        }

        if (v.app == 'music' && v.task == 'toggleAppIcon') {
            music.toggleAppIcon(v.state)
        } else if (v.app == 'music' && v.task == 'hasAppState') {
            music.hasAppState(v.state)
        }

        if (v.app == 'music' && v.task == 'setApiUrl') {
            music.setApiUrl(v.url)
        }
    });
});
