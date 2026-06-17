type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  light?: boolean; // when on dark background
};

export function SectionHeader({ eyebrow, title, body, light }: SectionHeaderProps) {
  return (
    <div className="section-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-header__title">{title}</h2>
      {body && (
        <p
          className="section-header__body"
          style={light ? { color: "var(--marshal-gray)" } : undefined}
        >
          {body}
        </p>
      )}
    </div>
  );
}
