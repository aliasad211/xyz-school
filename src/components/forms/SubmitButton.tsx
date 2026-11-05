import Icon from "../Icon";

export default function SubmitButton({ loading, label }: { loading: boolean; label: string }) {
  return (
    <button type="submit" className="btn btn--navy btn--block" disabled={loading}>
      {loading ? (
        <>
          <span className="spinner" aria-hidden="true" /> Sending…
        </>
      ) : (
        <>
          {label} <Icon name="send" size={18} />
        </>
      )}
    </button>
  );
}
