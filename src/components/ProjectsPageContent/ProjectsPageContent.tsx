import React, { useState } from 'react'

import FilterButton from './FilterButton/';
import Title from './Title';
import ProjectCard from './ProjectCard';

import projectsConfig, { ProjectsConfig } from '../../../docs/projects/_configs'
import styles from './ProjectsPageContent.module.css';

interface SelectedFilter {
    filter: string;
    value: string;
}

interface Filters {
    [key: string]: Set<string>;
}

interface FilterButtonClickEvent {
    target: HTMLButtonElement;
}

const FILTER_VAL_DELIMITER = '__'

const ProjectsPageContent = () => {
    const [selectedFilter, setSelectedFilter] = useState<null | SelectedFilter>(null)
    const filters = getUniqueFilters(projectsConfig)
    const buttons = createFilterButtons(filters)

    function handleFilterButtonClick(e: FilterButtonClickEvent) {
        const [filter, value] = e.target.value.split(FILTER_VAL_DELIMITER)
        setSelectedFilter({ filter, value })
    }

    function createFilterButtons(filters: Filters) {
        const buttons = []
        Object.entries(filters).forEach(([attribute, filterVals]) => {
            filterVals.forEach(val => {
                const value = `${attribute}${FILTER_VAL_DELIMITER}${val}`
                const isSelected = selectedFilter && selectedFilter.filter === attribute && selectedFilter.value.includes(val)

                buttons.push(
                    <FilterButton key={value} value={value} onClick={handleFilterButtonClick} isSelected={isSelected}>
                        {val}
                    </FilterButton>
                );
            });
        })
        return buttons
    }

    const filteredProjects = Object.values(projectsConfig).filter((projectInfo) => {
        if (!selectedFilter) return true
        const currentFilterValue = projectInfo[selectedFilter.filter]
        return currentFilterValue.includes(selectedFilter.value)
    })

    return (
        <div>
            <Title>Filters</Title>
            <div className={styles.buttons_wrapper}>
                {buttons}
            </div>
            <Title>Projects</Title>

            <div className={styles.projects_wrapper}>
                {filteredProjects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                ))}
            </div>

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


export default ProjectsPageContent

