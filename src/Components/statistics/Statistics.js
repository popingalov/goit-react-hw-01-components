export default function Statistics({ stats, title }) {
  return (
    <section class="statistics">
      {title ? <h2 class="title">{title}</h2> : ''}
      <ul class="stat-list">
        {stats.map(e => (
          <li
            class="item"
            key={e.id}
            style={{
              backgroundImage: `linear-gradient(to right ,red ${e.percentage}%,silver ${e.percentage}%) `,
            }}
          >
            <span class="label">{e.label}:</span>
            <span class="percentage">{e.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
