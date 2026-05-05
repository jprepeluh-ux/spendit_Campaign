export const landingPageQuery = `
  *[_type == "page"][0] {
    title,
    slug,
    hero-> {
      headlineStart,
      headlineHighlight,
      subheadline,
      ctaLabel,
      ctaHref,
      backgroundImage
    },
    purpose-> {
      eyebrow,
      headline,
      subtext,
      benefits[] {
        iconName,
        title,
        description
      }
    },
    taxBenefit-> {
      eyebrow,
      headline,
      headlineHighlight,
      body,
      highlights,
      figures[] {
        label,
        value,
        sub
      },
      disclaimer
    }
  }
`
