import ThemeSwitch from "./ThemeSwitch";

export default function Footer() {
  return (
    <footer className="border border-c-gray-500 p-5">
      <div className="flex justify-between">
        <h3 className="text-3xl font-semibold">Logo</h3>
        <ThemeSwitch />
      </div>
    </footer>
  );
}
