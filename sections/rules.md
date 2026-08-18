# Design rules

## Summary

<div id="design-rule-summary"></div>

## Rules

<div class="rule" id="/pagination/format" data-type="technical">
    <p class="rulelab">Use standard pagination format</p>
    <dl>
        <dt>Statement</dt>
        <dd>
            <p>A paginated request MUST use one (and only one) pagination method from the following list:
            <ul>
                <li>Page-number pagination using query keys <code>page</code> and <code>pageSize</code>:
                    <ul>
                        <li><code>page</code>: requested page number (1-based)
                        <li><code>pageSize</code>: maximum number of items to return per page
                    </ul>
                </li>
                <li>Cursor pagination using query keys <code>cursor</code> and <code>limit</code>:
                    <ul>
                        <li><code>cursor</code>: opaque pointer to current position in dataset
                        <li><code>limit</code>: maximum number of items to return per page
                    </ul>
                </li>
            </ul>
            <p class="note">An endpoint MAY define additional aliases such as, but not limited to, <code>size</code> or <code>offset</code> for backwards compatibility.
        </dd>
        <dt>Rationale</dt>
        <dd>
            <p>The defined formats cover the main usage patterns of pagination with the most commonly used names for query keys.
        </dd>
        <dt>How to test</dt>
        <dd>
        </dd>
    </dl>
</div>

<div class="rule" id="/pagination/links" data-type="technical">
    <p class="rulelab">Use a <code>Link</code> header for navigation</p>
    <dl>
        <dt>Statement</dt>
        <dd>
            <p>A paginated response MUST include an HTTP <code>Link</code> header [[RFC8288]] for navigation to other result segments according the following list:
            <ul>
                <li>Page-number pagination MUST use link relation types <code>first</code>, <code>prev</code>, <code>next</code>, and <code>last</code>, where applicable.
                <li>Cursor pagination MUST use link relation types <code>next</code> and <code>prev</code>
            </ul>
        </dd>
        <dt>Rationale</dt>
        <dd>
            <p>A <code>Link</code> header provides clients a convenient and consistent method of navigation.
            <p class="note">The link relation types are part of the <a href="https://www.iana.org/assignments/link-relations/link-relations.xhtml">Link Relations registry</a> maintained by IANA.
        </dd>
        <dt>How to test</dt>
        <dd>
        </dd>
    </dl>
</div>

<div class="rule" id="/pagination/sorting" data-type="functional">
    <p class="rulelab">Use deterministic ordering in paginated responses</p>
    <dl>
        <dt>Statement</dt>
        <dd>
            <p>Items in a paginated response MUST use deterministic ordering.
        </dd>
        <dt>Rationale</dt>
        <dd>
            <p>If the order can change beyond the influence of the client, items are likely to be missed or appear multiple times while traversing pages.
        </dd>
    </dl>
</div>
