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

<div class="rule" id="/pagination/limits" data-type="technical">
    <p class="rulelab">Document the page size limits</p>
    <dl>
        <dt>Statement</dt>
        <dd>
            <p>The OpenAPI definition document MUST include a default value for the returned page size (<code>pageSize</code> or <code>limit</code>) through the query parameter's <code>schema</code>, with <code>integer</code> as <code>type</code> and a <code>default</code> key.
            <p>The <code>schema</code> SHOULD also include a <code>maximum</code> value. A requested value larger than the maximum MUST result in HTTP status code <code>400</code> (Bad Request).
            <aside class="example" title="Page size limits in OAS">
      <pre class="json">{
  "name": "pageSize",
  "in": "query",
  "schema": {
    "type": "integer",
    "default": 20,
    "maximum": 100
  }
}</pre>
   </aside>
        </dd>
        <dt>Rationale</dt>
        <dd>
            <p>By documenting a default, the client can rely on that limit without having to request one or infer it from the presence of a link to another page.
            <p>By documenting a maximum, the client can avoid sending an unreasonable request.
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
            <p>A paginated response MUST include an HTTP <code>Link</code> header [[RFC8288]] for navigation to other result segments according to the following list:
            <ul>
                <li>Page-number pagination MUST use link relation types <code>first</code>, <code>prev</code>, and <code>next</code>, and MAY use <code>last</code>.
                <li>Cursor pagination MUST use link relation type <code>next</code> and MAY use <code>prev</code>.
            </ul>
            <p>A link relation that has no result (e.g. <code>prev</code> on the first page) MUST be omitted.
            <p class="note">The link relation types are part of the <a href="https://www.iana.org/assignments/link-relations/link-relations.xhtml">Link Relations registry</a> maintained by IANA.
        </dd>
        <dt>Rationale</dt>
        <dd>
            <p>A <code>Link</code> header provides clients with a convenient and consistent method of navigation.
            <p>The link relation type <code>last</code> is optional, as determining it requires counting the collection, which can be a costly endeavour.
            <p>Dynamic collections, like feeds, can experience mutations at the head. These can cause inconsistency with page alignment when reached with <code>prev</code>. Therefore, the backwards link is merely optional for cursor pagination.
            <p>An absent link relation allows the client to recognise the limits of the collection, without having to resolve a value without a target.
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
