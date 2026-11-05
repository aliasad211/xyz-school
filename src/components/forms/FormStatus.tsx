import Icon from "../Icon";

type Props = { status: string; message: string };

/** Success / error banner shown above a form after submit. */
export default function FormStatus({ status, message }: Props) {
  if (status !== "success" && status !== "error") return null;
  const ok = status === "success";
  return (
    <div className={`alert ${ok ? "alert--success" : "alert--error"}`} role={ok ? "status" : "alert"}>
      <Icon name={ok ? "check" : "close"} size={20} />
      <div>
        <strong>{ok ? "Thank you!" : "Please check the form"}</strong>
        {message}
      </div>
    </div>
  );
}
