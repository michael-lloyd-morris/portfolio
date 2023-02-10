import { ChangeEventHandler } from 'react'

interface Props {
  handleChange: ChangeEventHandler<HTMLSelectElement>,
}

export default function ChessVariants({handleChange}:Props) {
  return (
    <div className="formComponent">
      <label>Select a Variant</label>
      <select onChange={handleChange}>
        <option value="bullet">Bullet</option>
        <option value="blitz">Blitz</option>
        <option value="rapid">Rapid</option>
        <option value="classical">Classical</option>
        <option value="ultraBullet">Ultra-Bullet</option>
        <option value="chess960">Chess 960 (a.k.a. Fischer Random)</option>
        <option value="crazyhouse">Crazyhouse (a.k.a. Bughouse)</option>
        <option value="antichess">Anti-chess</option>
        <option value="atomic">Atomic</option>
        <option value="horde">Horde (a.k.a. Dusany's Chess)</option>
        <option value="kingOfTheHill">King of the Hill</option>
        <option value="racingKings">Racing Kings</option>
        <option value="threeCheck">Three Check</option>
      </select>
    </div>
  );
}