import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const COLUMNS = 12
const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

const StyledGrid = styled.div`
  ${props => props.container && css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  `}
  
  ${props => props.item && css`
    box-sizing: border-box;
    margin: 0;
  `}
  
  ${props => props.zeroMinWidth && css`
    min-width: 0;
  `}
  
  ${props => props.container && props.spacing && css`
    margin: ${props => -props.spacing / 2}px;
    width: calc(100% + ${props.spacing}px);
    & > .__grid_item__ {
      padding: ${props.spacing / 2}px;
    }
  `}
  
  ${props => {
    if (!props.item || !props.xs) {
      return
    }

    if (props.xs === true) {
      return css`
        flex-grow: 1;
        flex-basis: 0;
        max-width: 100%;
      `
    }

    // Keep 7 significant numbers.
    const width = `${Math.round((props.xs / COLUMNS) * 10e7) / 10e5}%`

    return css`
      flex-basis: ${width};
      max-width: ${width};
    `
  }}
  
  ${props => {
    if (!props.item || !props.sm) {
      return
    }

    if (props.sm === true) {
      return css`
        @media (min-width: ${props.breakpoints.sm}px) {
          flex-grow: 1;
          flex-basis: 0;
          max-width: 100%;
        }
      `
    }

    // Keep 7 significant numbers.
    const width = `${Math.round((props.sm / COLUMNS) * 10e7) / 10e5}%`

    return css`
      @media (min-width: ${props.breakpoints.sm}px) {
        flex-basis: ${width};
        max-width: ${width};
      }
    `
  }}
  
  ${props => {
    if (!props.item || !props.md) {
      return
    }

    if (props.md === true) {
      return css`
        @media (min-width: ${props.breakpoints.md}px) {
          flex-grow: 1;
          flex-basis: 0;
          max-width: 100%;
        }
      `
    }

    // Keep 7 significant numbers.
    const width = `${Math.round((props.md / COLUMNS) * 10e7) / 10e5}%`

    return css`
      @media (min-width: ${props.breakpoints.md}px) {
        flex-basis: ${width};
        max-width: ${width};
      }
    `
  }}
  
  ${props => {
    if (!props.item || !props.lg) {
      return
    }

    if (props.lg === true) {
      return css`
        @media (min-width: ${props.breakpoints.lg}px) {
          flex-grow: 1;
          flex-basis: 0;
          max-width: 100%;
        }
      `
    }

    // Keep 7 significant numbers.
    const width = `${Math.round((props.lg / COLUMNS) * 10e7) / 10e5}%`

    return css`
      @media (min-width: ${props.breakpoints.lg}px) {
        flex-basis: ${width};
        max-width: ${width};
      }
    `
  }}
  
  ${props => {
    if (!props.item || !props.xl) {
      return
    }

    if (props.xl === true) {
      return css`
        @media (min-width: ${props.breakpoints.xl}px) {
          flex-grow: 1;
          flex-basis: 0;
          max-width: 100%;
        }
      `
    }

    // Keep 7 significant numbers.
    const width = `${Math.round((props.xl / COLUMNS) * 10e7) / 10e5}%`

    return css`
      @media (min-width: ${props.breakpoints.xl}px) {
        flex-basis: ${width};
        max-width: ${width};
      }
    `
  }}
  
  align-content: ${props => props.alignContent !== Grid.defaultProps.alignContent && props.alignContent};
  align-items: ${props => props.alignItems !== Grid.defaultProps.alignItems && props.alignItems};
  flex-direction: ${props => props.flexDirection !== Grid.defaultProps.flexDirection && props.flexDirection};
  flex-wrap: ${props => props.flexWrap !== Grid.defaultProps.flexWrap && props.flexWrap};
  justify-content: ${props => props.justifyContent !== Grid.defaultProps.justifyContent && props.justifyContent};
`

const Grid = (props) => (
  <StyledGrid className={classNames({ '__grid_item__': props.item })} {...props} />
)

Grid.displayName = 'Grid'

Grid.propTypes = {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent: PropTypes.oneOf([
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'space-between',
    'space-around'
  ]),
  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),
  /**
   * Defines the pixel values for each breakpoint
   */
  breakpoints: PropTypes.shape({
    xs: PropTypes.number.isRequired,
    sm: PropTypes.number.isRequired,
    md: PropTypes.number.isRequired,
    lg: PropTypes.number.isRequired,
    xl: PropTypes.number.isRequired
  }),
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Defines the number of grid columns
   */
  columns: PropTypes.number,
  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: PropTypes.bool,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  flexDirection: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: PropTypes.bool,
  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justifyContent: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly'
  ]),
  /**
   * Defines the number of grid columns the component is going to span.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg: PropTypes.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Defines the number of grid columns the component is going to span.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md: PropTypes.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Defines the number of grid columns the component is going to span.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm: PropTypes.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Defines the number of grid columns the component is going to span.
   * It can only be used on a type `container` component.
   */
  spacing: PropTypes.number,
  /**
   * Defines the number of grid columns the component is going to span.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl: PropTypes.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Defines the number of grid columns the component is going to span.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs: PropTypes.oneOf([false, true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   */
  zeroMinWidth: PropTypes.bool
}

Grid.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  breakpoints: BREAKPOINTS,
  columns: 12,
  container: false,
  flexDirection: 'row',
  flexWrap: 'wrap',
  item: false,
  justifyContent: 'flex-start',
  lg: false,
  md: false,
  sm: false,
  spacing: 0,
  xl: false,
  xs: false,
  zeroMinWidth: false
}

export default Grid
