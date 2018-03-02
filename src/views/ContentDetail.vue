<template lang="html">
  <div class="container">
    <div class="">
      <!-- question -->
      <div class="card border-primary mt-3" style="">
        <div class="card-body">
          <h4 class="card-title">Question</h4>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <footer class="blockquote-footer" style="float:right;">
            Author (
            <label class="text-success">+0</label>
            /
            <label class="text-danger">-0</label>
            )
          </footer>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- answer -->
      <table class="table table-hover">
        <tr class="table-primary">
          <th>Answer example 1
            <footer class="blockquote-footer" style="float:right;">
              Author (
              <label class="text-success">+0</label>
              /
              <label class="text-danger">-0</label>
              )
            </footer>
          </th>
        </tr>
        <tr class="table-secondary">
          <th>Answer example 2
            <footer class="blockquote-footer" style="float:right;">
              Author (
              <label class="text-success">+0</label>
              /
              <label class="text-danger">-0</label>
              )
            </footer>
          </th>
        </tr>
      </table>
    </div>
    <!-- modal -->
    <button type="button" name="button" data-toggle="modal" data-target="#showModal">CLICK</button>
    <div id="showModal" class="modal" style="margin-top:50%;">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Vote</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="margin:auto;">
            <button type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
