// @ts-nocheck
import {TableWrap} from './StyledTable';

export default function TableStyle({
  $marginTop,
  $bodyHeight,
  $paddIng,
  $paddIngT,
  $paddIngTh,
  $paddIngTb,
  $paddIngImg,
  $paddIngCke,
  $paddIngN,
  $height,
  $tabletr,
  $table,
  $block,
  children,
}) {
  return (
    <TableWrap
      $marginTop={$marginTop}
      $paddIng={$paddIng}
      $paddIngT={$paddIngT}
      $paddIngTh={$paddIngTh}
      $paddIngTb={$paddIngTb}
      $paddIngImg={$paddIngImg}
      $paddIngCke={$paddIngCke}
      $paddIngN={$paddIngN}
      $height={$height}
      $tabletr={$tabletr}
      $table={$table}
      $block={$block}
      $bodyHeight={$bodyHeight}>
      {children}
    </TableWrap>
  );
}
