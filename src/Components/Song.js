function Song({ song }) {
  return (
    <tr>
      <td>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={`/songs/${song.id}`}>{song.name}</a>
      </td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td>{song.time}</td>
    </tr>
  );
}

export default Song;
