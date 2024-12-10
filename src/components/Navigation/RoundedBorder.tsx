const RoundedBorder = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const buttonClass =
    "border border-[rgba(245,245,245,0.1)] rounded-md bg-[#141414] flex justify-center items-center";

  return <div className={buttonClass}>{children}</div>;
};

export default RoundedBorder;
