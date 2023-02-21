type BulletProps = {
  name: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export default function Bullet(props: BulletProps) {
  const { name, checked, onChange } = props;

  return (
    <div>
      <label className={`block rounded bg-gray-200 p-2 dark:bg-gray-700`}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(ev) => {
            onChange && onChange(ev.target.checked);
          }}
          className="mr-2"
        />
        {name}
      </label>
    </div>
  );
}
