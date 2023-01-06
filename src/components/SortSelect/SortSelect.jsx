

const SortSelect = ({sort,setSort}) => {
  return (
    <select className="sort-select " onChange={(e)=>setSort(e.target.value)}>
              <option className="sort-select-sort" value="">Сортировка по:</option>
              <option className="sort-select-sort" value="big">К большему</option>
              <option className="sort-select-sort" value="small">К меньшему</option>
            </select>
  )
}

export default SortSelect