import React from "react";
import FilterLink from "../containers/filter-link";
import { VisibilityFilters } from "../actions";
const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;

export default () => (
  <p>
    Show: <FilterLink filter={SHOW_ALL}>All</FilterLink>
    {", "}
    <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
    {", "}
    <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
  </p>
);
