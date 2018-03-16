/**
 * This script is responsible for any common UI tweaks needed via script.
 */

(function ($, _) {
  /**
  * Substitutes main menu arrow image with FontAwesome caret icon
  */
  function substituteMenuArrows () {
    $('#root-menu-div .menu-item-arrow').each(function ($element) {
      var $arrow = $(this);

      $arrow.before('<i class="fa fa-caret-right menu-item-arrow"></i>');
      $arrow.remove();
    });
  }

  /**
   * Breaks the summary tooltip out of the scroll box and repositions it appropriately.
   */
  function activitySummaryTooltipsPosition () {
    $(document).on('mouseover', '.crm-summary-link', function () {
      var $tooltip = $('.crm-tooltip-wrapper', this);

      // Save tooltip's location from the relative parent on the first run
      if (typeof this.knownpos === 'undefined') {
        this.knownpos = {
          top: $tooltip.position().top,
          left: $tooltip.position().left
        };

        // Stop the summary link affecting position.
        $(this).css('position', 'static');
      }

      // Summary link's position from the new offset parent
      let offsetpos = $(this).position();

      // Set tooltip's position.
      $tooltip.css('left', Math.floor(this.knownpos.left + offsetpos.left) + 'px');
      $tooltip.css('bottom', Math.floor($(this).offsetParent().height() - offsetpos.top + $(this).height()) + 'px');
    });
  }

  $(document).ready(function () {
    substituteMenuArrows();

    activitySummaryTooltipsPosition();
  });
}(CRM.$, CRM._));
