import React from 'react'

import FilterButton from './FilterButton/';
import Title from './Title';

import projectsConfig, { ProjectsConfig } from '../../../docs/projects/_configs'
import styles from './ProjectsPageContent.module.css';

const ProjectsPageContent = () => {
    const filters = getUniqueFilters(projectsConfig)
    const buttons = createFilterButtons(filters)

    console.log({ filters })
    return (
        <div>
            <Title>Filters</Title>
            <div className={styles.buttons_wrapper}>
                {buttons}
            </div>
            <Title>Projects</Title>
        </div>
    )
}


const FILTERABLE_ATTRIBUTES = new Set(['project_tags', 'level_of_difficulty', 'roles'])

function getUniqueFilters(projectsConfig: ProjectsConfig) {
    const uniqueFilters = {}
    Object.values(projectsConfig).forEach(projectData => {
        const attributeKeysAndValues = Object.entries(projectData)
        attributeKeysAndValues.forEach(([attribute, value]) => {
            if (FILTERABLE_ATTRIBUTES.has(attribute)) {
                if (!uniqueFilters[attribute]) uniqueFilters[attribute] = new Set<string>()

                if (Array.isArray(value)) {
                    uniqueFilters[attribute].add(...value)
                } else {
                    uniqueFilters[attribute].add(value)
                }
            }
        })
    })
    return uniqueFilters
}

interface Filters {
    [key: string]: Set<string>;
}

function createFilterButtons(filters: Filters) {
    const buttons = []
    Object.entries(filters).forEach(([attribute, filterVals]) => {
        filterVals.forEach(val => {
            const value = `${attribute}__${val}`

            buttons.push(
                <FilterButton key={value} value={value}>
                    {val}
                </FilterButton>
            );
        });
    })
    return buttons
}

export default ProjectsPageContent

