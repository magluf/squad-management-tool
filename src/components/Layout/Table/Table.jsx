import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes, { string } from "prop-types";

import classes from "./Table.module.scss";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = React.useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const Table = ({ tableItems, tableColumns }) => {
  const [actionsColumn, toggleActionsColumn] = useState({
    showActions: false,
    itemId: null,
  });

  const toggleActionsHandler = (itemId, toggle) => {
    toggleActionsColumn({
      showActions: toggle,
      itemId,
    });
  };

  const { items, requestSort, sortConfig } = useSortableData(tableItems);
  const getClassNamesFor = (name) => {
    if (sortConfig) {
      return sortConfig.key === name
        ? classes[sortConfig.direction]
        : undefined;
    }
    return null;
  };

  return (
    <div className={classes.Table}>
      <table>
        <thead>
          <tr>
            {tableColumns.map((col) => {
              return (
                <th key={col}>
                  <div
                    role="button"
                    onClick={() => requestSort(col)}
                    className={getClassNamesFor(col)}
                  >
                    {col}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              onMouseEnter={() => toggleActionsHandler(item.id, true)}
              onMouseLeave={() => toggleActionsHandler(item.id, false)}
              key={item.id}
            >
              <td>{item.name}</td>
              <td>{item.description}</td>
              {actionsColumn.showActions && actionsColumn.itemId === item.id ? (
                <td>
                  <i className={[classes.tooltip, "la la-trash"].join(" ")}>
                    <span className={classes.tooltiptext}>Delete</span>
                  </i>
                  <i
                    className={[
                      classes.tooltip,
                      "las la-share-alt-square",
                    ].join(" ")}
                  >
                    <span className={classes.tooltiptext}>Share</span>
                  </i>
                  <NavLink
                    className={classes.NavLink}
                    to={`edit-team/${item.id}`}
                  >
                    <i className={[classes.tooltip, "la la-pen"].join(" ")}>
                      <span className={classes.tooltiptext}>Edit</span>
                    </i>
                  </NavLink>
                </td>
              ) : (
                <td />
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  tableItems: PropTypes.arrayOf(Object).isRequired,
  tableColumns: PropTypes.arrayOf(string).isRequired,
};

export default Table;
// import React from "react";
// import BootstrapTable from "react-bootstrap-table-next";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
// import classes from "./Table.module.scss";

// const columns = [
//   {
//     dataField: "name",
//     text: "Name",
//     sort: true,
//   },
//   {
//     dataField: "description",
//     text: "Description",
//     sort: true,
//   },
// ];

// const defaultSorted = [
//   {
//     dataField: "name",
//     order: "desc",
//   },
// ];

// const teams = [
//   {
//     id: 1,
//     name: "sup",
//     description: "hehehehe",
//   },
//   {
//     id: 2,
//     name: "sup",
//     description: "hehehehe",
//   },
//   {
//     id: 3,
//     name: "sup",
//     description: "hehehehe",
//   },
//   {
//     id: 4,
//     name: "sup",
//     description: "hehehehe",
//   },
// ];

// const Table = () => (
//   <BootstrapTable
//     bootstrap4
//     keyField="id"
//     data={teams}
//     columns={columns}
//     defaultSorted={defaultSorted}
//     bordered={false}
//     classes={classes.Table}
//   />
// );

// export default Table;
