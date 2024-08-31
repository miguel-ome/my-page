export function StepsCircle() {
  return (
    <div className="flex justify-center space-x-2 dark:text-gray-800">
      <button
        type="button"
        title="previous"
        className="inline-flex bg-orangeBold items-center justify-center w-2 h-2 py-0 border-orange rounded-full"
      />
      <button
        type="button"
        title="Page 1"
        className="inline-flex bg-black items-center justify-center w-2 h-2 py-0 border rounded-full"
      />
      <button
        type="button"
        className="inline-flex bg-black items-center justify-center w-2 h-2 py-0 border rounded-full"
        title="Page 2"
      />
      <button
        type="button"
        className="inline-flex bg-black items-center justify-center w-2 h-2 py-0 border rounded-full"
        title="Page 3"
      />
      <button
        type="button"
        className="inline-flex bg-black items-center justify-center w-2 h-2 py-0 border rounded-full"
        title="Page 4"
      />
      <button
        title="next"
        type="button"
        className="inline-flex bg-black items-center justify-center w-2 h-2 py-0 border rounded-full"
      />
    </div>
  );
}
