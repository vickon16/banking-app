interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-clampLg font-semibold">
        {title}
        {type === "greeting" && (
          <span className="text-primary font-bold">&nbsp;{user}</span>
        )}
      </h1>
      <p className="text-clampSm font-normal text-muted-foreground">
        {subtext}
      </p>
    </div>
  );
};

export default HeaderBox;
