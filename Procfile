web: bundle exec puma
worker: bundle exec sidekiq -c 2 -q default -q active_storage_analysis -q active_storage_purge
