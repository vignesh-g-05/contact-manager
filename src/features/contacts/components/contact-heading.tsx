import { MUTED } from "@/const/styles";

const ContactHeading = ({ count }: { count: number }) => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight">All contacts</h1>
      <p className={`mt-1 mb-6 text-sm ${MUTED}`}>{count} contacts</p>
    </>
  );
};

export default ContactHeading;
